import { createContext, useContext } from "react";

const useImageContext = createContext()

export function ImageContextProvider({ children }) {

    function getFeaturedImage(post) {
        if (post && post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url ) {
            return post._embedded['wp:featuredmedia'][0].source_url
        } else {
            return 'https://placehold.co/600x400'
        }
    }

    return (
        <useImageContext.Provider
            value={getFeaturedImage}
        >
            {children}
        </useImageContext.Provider>
    )
}
export function useImage() {
    return useContext(useImageContext)
}

