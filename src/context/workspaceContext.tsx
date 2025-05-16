import { getWorkspaceData } from "config/services";
import { useContext, useEffect, useState } from "react";
import React from "react";

interface Workspace {
  id?: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  google_maps_url?: string | undefined;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: string | null;
  rules: string | null;
  amenities: string[] | null;
  images: string[];
  working_hours_start: string;
  working_hours_end: string;
  contact_person_name?: string | undefined;
  facilities: string | null;
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: {
    [key: number]: {
      value: number;
      message: string;
    };
  };
  manager_id?: string | null;
}

interface WorkspaceContextType {
  workspaceData: Workspace[];
  loading: boolean;
}

const WorkspaceContext = React.createContext<WorkspaceContextType | undefined>(
  undefined
);

export const WorkspaceProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [workspaceData, setWorkspaceData] = useState<Workspace[]>([]);
  const [loading, setLoading] = useState(true);

  //api call
  const workSpaceData = async () => {
    setLoading(true);
    const response = await getWorkspaceData();
    if (response && response.length > 0) {
      setWorkspaceData(response);
      setLoading(false);
    }
  };

  useEffect(() => {
    workSpaceData();
  }, []);

  return (
    <WorkspaceContext.Provider value={{ workspaceData, loading }}>
      {children}
    </WorkspaceContext.Provider>
  );
};

export const useWorkspace = () => {
  const context = useContext(WorkspaceContext);
  if (!context) {
    throw new Error("useWorkspace must be used within a WorkspaceProvider");
  }
  return context;
};
