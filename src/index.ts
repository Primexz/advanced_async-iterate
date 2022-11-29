export async function each(input: any[], ...functions: Function[]): Promise<boolean | any[]> {
	for await (const callback of functions) {
		if (typeof callback != 'function') throw new Error('You have to pass a function as parameter.')

		const functionName = callback.name
		const arrayLength = input.length

		switch (functionName) {
			case 'forEach':
				for (let i = 0; i < arrayLength; i++) {
					await callback(input[i], i, input)
				}
				break
			case 'every':
				let result: boolean = true
				for (let i = 0; i < arrayLength; i++) {
					const ret: boolean = await callback(input[i], i, input)
					if (!ret) result = false
				}
				return result
				break
			case 'map':
				for (let i = 0; i < arrayLength; i++) {
					input[i] = await callback(input[i], i, input)
				}
				break
			case 'filter':
				let filterRes = []
				for (let i = 0; i < arrayLength; i++) {
					const valid: boolean = await callback(input[i], i, input)
					if (valid) filterRes.push(input[i])
				}
				input = filterRes
				break
			default:
				throw new Error('Invalid function provided. Allowed functions are: forEach, every, map, filter')
		}
	}

	/* all functions finished, lets return the result */
	return input
}
