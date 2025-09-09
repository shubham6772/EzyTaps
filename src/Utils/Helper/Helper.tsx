export const Helper = {


    formatNumber: (num: number): string => {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num.toString();
    },

    generateFakeSequence: (target: number, steps: number, startOffset: any): number[] => {
        const sequence: number[] = [];
        const startValue = Math.max(0, target * (1 - startOffset / 100));

        // Create a realistic progression
        for (let i = 0; i <= steps; i++) {
            const progress = i / steps;
            // Use easing function for more realistic progression
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(startValue + (target - startValue) * easedProgress);
            sequence.push(currentValue);
        }

        // Ensure the last value is exactly the target
        sequence[sequence.length - 1] = target;

        return sequence;
    },

    // Convert hex to rgba
    hexToRgba: (hex: string, alpha: number = 1) => {
        hex = hex.replace("#", "");
        if (hex.length === 3) {
            hex = hex.split("").map((x) => x + x).join("");
        }
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    },

    extractParamFromURL: (input: string): Record<string, string> => {
        let queryString = input;

        // If the input is a full URL, extract the query string after '?'
        const questionMarkIndex = input.indexOf("?");
        if (questionMarkIndex !== -1) {
            queryString = input.substring(questionMarkIndex + 1);
        }

        // Split by '&' and convert to key-value pairs
        return queryString.split("&").reduce<Record<string, string>>((acc, param) => {
            const [key, value] = param.split("=");
            if (key) acc[key] = value || "";
            return acc;
        }, {});
    },

    isDomainExistInURL: (domainName: string, targetURL: string): boolean => {
        if (!domainName || !targetURL) return false;

        try {
            const url = new URL(targetURL);
            const hostname = url.hostname.toLowerCase();
            domainName = domainName.toLowerCase();

            // exact match or subdomain match
            return hostname === domainName || hostname.endsWith(`.${domainName}`);
        } catch (e) {
            return false; // invalid URL
        }
    }






}