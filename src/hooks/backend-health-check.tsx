import { useEffect, useState } from "react"
import { healthCheck } from "../services/goServerService";

export const useBackendHealthCheck = () => {
    const [isBEHealthy, setIsBEHealthy] = useState(false);

    useEffect(() => {
        const checkHealth = async () => {
            const isHealthy = await healthCheck();
            setIsBEHealthy(isHealthy);
        };

        checkHealth();
    }, []);

    return isBEHealthy;
}