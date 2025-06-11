import { createContext, useContext } from "react";
import { Cloudinary } from "@cloudinary/url-gen";

const CloudinaryClient = new Cloudinary({
    cloud: {
        apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY,
        apiSecret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }
})

const CloudinaryContext = createContext(CloudinaryClient)

export function CloudinaryProvider({ children }: { children: React.ReactNode }) {
    return (
        <CloudinaryContext.Provider value={CloudinaryClient}>
            {children}
        </CloudinaryContext.Provider>
    )
}

export const useCloudinary = () => useContext(CloudinaryContext);