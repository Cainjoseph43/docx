import {XmlComponent, Attributes} from "../xml-components";

export class Style implements XmlComponent {
    private pStyle: Array<XmlComponent>;

    constructor(type: string) {
        this.pStyle = new Array<XmlComponent>();
        this.pStyle.push(new Attributes({
            val: type
        }));
    }
}