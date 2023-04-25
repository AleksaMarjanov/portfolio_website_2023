interface Base {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string,
    _updatedAt: string;
}

export interface About extends Base {
    _type: "about",
    paragraph1: string,
    paragraph2: sring,
    paragraph3: string,
}

export interface Experience extends Base {
    _type: "experience",
    position: string,
    company: string,
    companyLink: url,
    dateStarted: date,
    time: string;
    dateEnded: date,
    isCurrentlyWorkingHere: boolean,
    address: string,
    work: string,
}
export interface Projects extends Base {
    _type: "project",
    github: url,
    image: Image,
    link: url,
    summary: string,
    title: string,
    type: string,
}

interface Image {
    _type: "image";
    asset: Reference;
}
