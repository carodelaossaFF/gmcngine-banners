import React, { FC, ReactElement } from "react";
import { ICase } from "../../shared/types/cases/case";
export declare enum BannerType {
    SINGLE_CHILD_PORTRAIT = "SINGLE_CHILD_PORTRAIT",
    SINGLE_CHILD_LANDSCAPE = "SINGLE_CHILD_LANDSCAPE",
    MULTIPLE_CHILD_PORTRAIT = "MULTIPLE_CHILD_PORTRAIT",
    MULTIPLE_CHILD_LANDSCAPE = "MULTIPLE_CHILD_LANDSCAPE"
}
declare type Props = {
    data: ICase;
    type: BannerType;
    printTrigger: () => ReactElement;
    language?: string;
};
export declare const DataContext: React.Context<{
    data: ICase;
}>;
declare const MissingBanners: FC<Props>;
export default MissingBanners;
