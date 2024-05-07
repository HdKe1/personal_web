import type { PageLoad } from "./$types";


export const load = (() => {
    return {
        snippets: [
            {
                title: 'Adi code snippet',
                language: 'html',
                code: '<div> This is my first cool web </div>',
                favorite: false
            },
            {
                title: 'Hdke code snippet',
                language: 'typescript',
                code: 'console.log("backontrack");',
                favorite: false
            }
        ]
    }
})satisfies PageLoad
