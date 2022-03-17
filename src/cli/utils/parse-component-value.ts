import { normalize, resolve } from 'path';

/**
 * Parse the component information to create a kind of descriptor.
 * @param name
 * @param componentType
 * @param path
 */
export function parseComponentValue(
	name: string,
	componentType: string,
	path = `src/modules/${name}/`
): {
	relativeDestinationPath: string;
	fullDestinationPath: string;
	componentName: string;
	componentFileName: string;
} {
	const componentFileName = `${name}.${componentType}.ts`;
	const componentName =
		name.charAt(0).toUpperCase() + name.slice(1) + componentType?.charAt(0).toUpperCase() + componentType?.slice(1);
	const fullDestinationPath = normalize(resolve(process.cwd(), path));
	return { relativeDestinationPath: normalize(path), fullDestinationPath, componentName, componentFileName };
}
