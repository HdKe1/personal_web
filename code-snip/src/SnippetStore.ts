 import { writable,get } from "svelte/store";

 export const snippetStore = writable<CodeSnippet[]>([]);

 export function addSnippet(input: CodeSnippetInput){
    let snippets = get(snippetStore);
    snippetStore.update(() =>{
        return [{...input , favorite: false},...snippets]
    })
 }