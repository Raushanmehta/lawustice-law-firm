import rawData from "./data.json";

const siteData: any = {};
const actualData: any = (rawData as any).default || rawData;

if (actualData?.Lawfirm?.sections) {
    for (const key of Object.keys(actualData.Lawfirm.sections)) {
        const sections: any = actualData.Lawfirm.sections;
        const variantKey = Object.keys(sections[key].variants)[0];
        siteData[key] = sections[key].variants[variantKey];
    }
} else {

    Object.assign(siteData, actualData);
}

export default siteData;
