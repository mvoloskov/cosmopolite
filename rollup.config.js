import packageJson from './package.json'

export default {
    input: packageJson.main,
    output: {
        file: 'dist/dist.js',
        format: 'iife',
        name: packageJson.name
    }
}
