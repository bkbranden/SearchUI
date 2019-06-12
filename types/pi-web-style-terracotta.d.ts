export const dictionary: {
    colors: {
        a1: string;
        a2: string;
        a3: string;
        a4: string;
        a5: string;
        b1: string;
        b1a: string;
        b2: string;
        b3: string;
        b4: string;
        b4a: string;
        transparent: string;
    };
    grid: {
        columns: number;
    };
    spacing: {
        auto: string;
        nil: number;
        x0p25: number;
        x0p5: number;
        x1: number;
        x1p5: number;
        x2: number;
        x3: number;
    };
    type: {
        x1: string;
        x1p5: string;
        x2: string;
        x2p5: string;
        x3: string;
        x4: string;
        x5: string;
        x6: string;
        x7: string;
        x8: string;
        x9: string;
    };
};
export namespace flattenObject {
    function flattenObject(pred: any, obj: any, separator: any): any;
    function isLast(val: any): void;
    function isNotObject(val: any): void;
}
export namespace generators {
    function bg(...args: any[]): any;
    function disp(): any;
    function flex(): any;
    function generate(extColors: any, extType: any, extSpacing: any, extLineHeights: any, extFontWeights: any, extFonts: any, extTracking: any): any;
    function pos(): any;
    function responsive(utils: any, viewports: any, whitelist: any): any;
    function size(): any;
    function space(...args: any[]): any;
    function typography(type: any, colors: any, lineHeights: any, tracking: any, fontWeights: any, fonts: any): any;
}
export function sanitizeObject(obj: any): any;
