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

interface Image {
    _type: "image";
    asset: Reference;
}
