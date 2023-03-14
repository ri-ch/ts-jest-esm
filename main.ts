const testFunction = async (input: number) => await Promise.resolve(input * 4)

export const result = await testFunction(4)
