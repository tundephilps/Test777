"use client";

import { addFavorite } from "@/actions/games/my-favorite/add-favorite";
import { removeFavorite } from "@/actions/games/my-favorite/remove-favorite";
import { useToast } from "@/hooks/use-toast";
import { http } from "@/lib/http";
import { createContext, useContext, useEffect, useState } from "react";

interface FavoriteContextType {
  favorites: Set<number>;
  toggleFavorite: (
    gameId: number,
    gameName: string,
    isCurrentlyFavorite: boolean,
  ) => Promise<void>;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined,
);

export const FavoriteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const toast = useToast();
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  // Load favorites from local storage or API when the app starts
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
          const parsedFavorites = JSON.parse(storedFavorites);
          setFavorites(new Set(parsedFavorites));
          console.log("Loaded favorites from localStorage:", parsedFavorites);
        } else {
          // Fetch from API if not in local storage
          console.log("Fetching favorites from API...");
          const response = await http.get<any>("/api/player/getFavoriteGames");

          if (response?.status === 200 && response?.data) {
            const favoriteIds = response.data.favorites || [];
            setFavorites(new Set(favoriteIds));
            localStorage.setItem("favorites", JSON.stringify(favoriteIds));
            console.log("Loaded favorites from API:", favoriteIds);
          }
        }
      } catch (error) {
        console.error("Error loading favorites:", error);
      }
    };

    loadFavorites();
  }, []);

  // Toggle favorite status
  const toggleFavorite = async (
    gameId: number,
    gameName: string,
    isCurrentlyFavorite: boolean,
  ) => {
    console.log("FavoriteContext: toggleFavorite called", {
      gameId,
      gameName,
      isCurrentlyFavorite,
    });

    // Optimistic update - update UI immediately
    setFavorites((prev) => {
      const updatedFavorites = new Set(prev);
      if (isCurrentlyFavorite) {
        updatedFavorites.delete(gameId);
      } else {
        updatedFavorites.add(gameId);
      }

      // Cache the updated favorites in local storage
      const favoritesArray = Array.from(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(favoritesArray));
      console.log("Optimistic update - favorites:", favoritesArray);

      return updatedFavorites;
    });

    try {
      console.log(
        `Calling ${isCurrentlyFavorite ? "removeFavorite" : "addFavorite"} for game ${gameId}`,
      );

      // Use the server actions instead of direct HTTP calls
      const result = isCurrentlyFavorite
        ? await removeFavorite({ gameId })
        : await addFavorite({ gameId });

      console.log("Server Action Result:", result);

      if (result.error) {
        // Revert optimistic update on error
        setFavorites((prev) => {
          const updatedFavorites = new Set(prev);
          if (isCurrentlyFavorite) {
            updatedFavorites.add(gameId); // Add back
          } else {
            updatedFavorites.delete(gameId); // Remove
          }

          const favoritesArray = Array.from(updatedFavorites);
          localStorage.setItem("favorites", JSON.stringify(favoritesArray));
          console.log("Reverted favorites:", favoritesArray);

          return updatedFavorites;
        });

        // Handle error
        const errorMsg =
          typeof result.error === "string"
            ? result.error
            : JSON.stringify(result.error);
        toast.error(errorMsg);
        console.error("Error from server action:", errorMsg);
      } else {
        // Success - show toast (state already updated optimistically)
        toast.success(
          isCurrentlyFavorite
            ? `${gameName} removed from favorites!`
            : `${gameName} added to favorites!`,
        );
      }
    } catch (error) {
      // Revert optimistic update on exception
      setFavorites((prev) => {
        const updatedFavorites = new Set(prev);
        if (isCurrentlyFavorite) {
          updatedFavorites.add(gameId);
        } else {
          updatedFavorites.delete(gameId);
        }

        const favoritesArray = Array.from(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(favoritesArray));

        return updatedFavorites;
      });

      console.error("Error toggling favorite:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorite must be used within a FavoriteProvider");
  }
  return context;
};
