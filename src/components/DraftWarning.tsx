import { AlertTriangle } from "lucide-react";

export const DraftWarning = () => {
    return (
        <div className="bg-yellow-400 text-black px-6 py-3 flex items-center justify-center gap-3 w-full relative z-[200]">
            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-bold tracking-wide">
                INTERN CONCEPT: Deze pagina is momenteel in ontwikkeling met dummy-data. We gaan eerst live zonder deze pagina; deze volgt in een latere fase.
            </p>
        </div>
    );
};
