import { Comfortaa } from 'next/font/google';
import localFont from 'next/font/local'

export const comfortaa = Comfortaa({weight: ['500'], subsets: ['latin']});
export const verdana = localFont({src: '../../public/verdana-font-family/Verdana.woff2'});
export const verdana_italic = localFont({src: '../../public/verdana-font-family/Verdana-Italic.woff2'});
export const verdana_bold = localFont({src: '../../public/verdana-font-family/Verdana-Bold.woff2'});
export const verdana_bolditalic = localFont({src: '../../public/verdana-font-family/Verdana-BoldItalic.woff2'});