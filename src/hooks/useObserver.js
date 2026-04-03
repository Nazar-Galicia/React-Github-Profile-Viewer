import {useEffect} from "react";

export function useObserver(setPage, observerRef) {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setPage((prevState) => prevState + 1);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) observer.unobserve(observerRef.current);
        };
    }, []);
}