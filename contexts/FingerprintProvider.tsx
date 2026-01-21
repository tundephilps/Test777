"use client";

import { getFingerprint } from "@/actions/fingerprint";
import { DeviceFingerprint } from "@/lib/device-fingerprint";
import * as FingerprintJS from "@fingerprintjs/fingerprintjs";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type FingerprintContextValue = {
  fingerprint: string | null;
};

const FingerprintContext = createContext<FingerprintContextValue | undefined>(
  undefined
);

type FingerprintProviderProps = {
  children: ReactNode;
};

export const FingerprintProvider: React.FC<FingerprintProviderProps> = ({
  children,
}) => {
  const [fingerprintKey, setFingerprintKey] = useState<string | null>(null);

  const getLocalStorageToken = (updatedToken: string | null = null) => {
    const KEY = "_fp";

    if (updatedToken) {
      localStorage.setItem(KEY, updatedToken);
      return updatedToken;
    }

    let token = localStorage.getItem(KEY);
    if (!token) {
      token = crypto.randomUUID();
      localStorage.setItem(KEY, token);
    }
    return token;
  };

  useEffect(() => {
    const getFp = async () => {
      const fingerprinter = new DeviceFingerprint();
      const data = await fingerprinter.generateFingerprint();
      const combined = await fingerprinter.combineFingerprints(data);

      const fpInstance = await FingerprintJS.load();
      const { visitorId: fingerprint, components } = await fpInstance.get();

      const localStorageId = getLocalStorageToken();

      const stableHash = combined.hash;

      const language =
        (components as any)?.languages?.value?.[0]?.[0] || "en-US";

      let fingerprintValue: string | null = null;
      let count = 0;

      while (!fingerprintValue && count++ < 3) {
        const response = await getFingerprint({
          fingerprint,
          stable_hash: stableHash,
          language,
          timezone: (components as any).timezone?.value,
          local_storage_id: localStorageId,
        });

        fingerprintValue = (response as any)?.data?.fingerprint || null;

        if ((response as any)?.data?.local_storage_id) {
          getLocalStorageToken((response as any).data.local_storage_id);
        }
      }

      setFingerprintKey(fingerprintValue);
    };

    getFp();
  }, []);

  return (
    <FingerprintContext.Provider value={{ fingerprint: fingerprintKey }}>
      {children}
    </FingerprintContext.Provider>
  );
};

export const useFingerprint = () => {
  const context = useContext(FingerprintContext);
  if (!context) {
    throw new Error("useFingerprint must be used within a FingerprintProvider");
  }
  return context;
};
