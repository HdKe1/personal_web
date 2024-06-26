// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}


interface CodeSnippetInput{
	title: String
	language: String
	code: String
}

interface CodeSnippet {
	title: String
	language: String
	code: String
	favorite: boolean
}