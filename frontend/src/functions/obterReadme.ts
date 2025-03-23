export async function obterReadme(repositorioUrl: string) {
	const repositorio = repositorioUrl.split("github.com/")[1]
	const readmeUrl = `https://raw.githubusercontent.com/${repositorio}/main/README.md`

	const response = await fetch(readmeUrl)
	return response.text()
}
