# Rick and Morty 

Welcome to rick and morty test by manifest ♋ 🌙 this is a dex ( similar name a pokedex) to search, view detail and find characters in next js


## preview

StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**

![preview of application](https://i.imgur.com/Sn6qlIB.png)

## Features

- Nx extensible build sistem
- Inspirational Design
- SEO friendly **( All routes is rendered SSR )**
- Search engine **SSR** 
- Schema.org
- Episode detail 


## Main technologies

 - Nextjs https://nextjs.org/
 - React https://es.reactjs.org/
 - nx https://nx.dev/
 - Tailwind https://tailwindcss.com/
 - graphql https://rickandmortyapi.com/graphql
 
## other technologies / Libraries

 - Adobe fonts https://fonts.adobe.com/fonts/ocr-a
 - Google Fonts
 

## Diagram provide by nx

run the command to see dependency graph:

```bash
 npx nx dep-graph
```

![](https://i.imgur.com/3vtglJ2.png)

## React Folder Structure

> "priority pseudo atomic design"

see https://stackoverflow.com/questions/69223411/nextjs-folders-structure

Basic application structure

```
|-rick-and.morty-dex
  |-Components    
    |- CharacterItem
	   |-character-item.module.scss // specific styles for component
	   |-index.tsx 					// main component
    |- CharacterList 
	    |- ....						// etc...
  |-styles
   |-globals.css
   |-header.module.css
   |-footer.module.css
  |-Services
    |-api              
  |-Context
   |-AuthContext.js    #Global context to my app for auth purposes
  |-pages
   |-index.js
```

structure for libraries folder, external libraries ready for reuse in other applications

```
|-rick-and.morty-dex
  |-Components    
    |- CharacterItem
	   |-character-item.module.scss // specific styles for component
	   |-index.tsx // main component
    |- CharacterList 
```

## SASS Architecture

https://gist.github.com/AdamMarsden/7b85e8d5bdb5bef969a0

```
sass/
|
|– base/
|   |– _reset.scss       	# Reset/normalize
|   |– _variables.scss   	# Sass Variables
|   ...                  	# Etc…
|
|– layout/
|   |– _layout.scss  		# Navigation
|   ...                  	# Etc…

|– sass-utils/
|   |– _mixins.scss      	# Sass Mixins
|
|– vendors/
|   |– _vendor.scss   		# taiwind
|   ...                  	# Etc…
|
`– globals.scss            # Primary Sass file
```
## Inspiration

https://www.pinterest.es/search/pins/?q=rick%20and%20morty%20space&rs=typed&term_meta[]=rick%20and%20morty%20space%7Ctyped

## Helpful links

https://gist.github.com/AdamMarsden/7b85e8d5bdb5bef969a0

https://medium.com/@pablo.delvalle.cr/an-opinionated-basic-next-js-files-and-directories-structure-88fefa2aa759

https://dev.to/alexeagleson/how-to-build-scalable-architecture-for-your-nextjs-project-2pb7


## FAQ

