export interface TestType {
    correct: number;
    head: string;
    variants: Array<string>;
}

export default interface CategoryItemType {
    title: string,
    body: TestType[],
    id: number,
    complexity: string
}