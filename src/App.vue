<script setup>
import {ref, resolveComponent, h, render, watch, createApp, onMounted} from 'vue'

import imgGithub from './assets/github.svg'

const $e = ref()
const MailSignatureEditable = resolveComponent('mailSignatureEditable')
const signatureHtmlContent = ref(``)

const onDrop = e => {
  onDragDrop(e)
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    const file = files[0]
    
    if (file.type.startsWith('text/')) {
      const reader = new FileReader()
      
      reader.onload = function(e) {
        console.log(e.target.result)
        signatureHtmlContent.value = e.target.result
      }

      reader.readAsText(file)
    } else {
      alert('Wrong file format. Please drop a text/html or any text/* file!')
    }
  }
}


const isMounted = ref(false)
const isDragOver = ref(false)
const onDragDrop = e => {
  if(e.type == 'dragover') e.dataTransfer.dropEffect = 'copy'
  isDragOver.value = e.type != 'dragleave'
}

const headStyles = []

watch(_ => [signatureHtmlContent.value, isMounted.value], ([_signatureHtmlContent, _isMounted]) => {
  if(!_signatureHtmlContent || !_isMounted) return

  // const parser = new DOMParser()
  // const doc = parser.parseFromString(_signatureHtmlContent.replace(/<mailSignatureEditable([^>]+)\/>/ig, '<mailSignatureEditable$1></mailSignatureEditable>'), 'text/html')
  const virtualDOM = document.createElement('div')
  // const virtualDOM = _virtualDOM.attachShadow({ mode: "open" })
  virtualDOM.innerHTML = _signatureHtmlContent.replace(/<mailSignatureEditable([^>]+)\/>/ig, '<mailSignatureEditable$1></mailSignatureEditable>')

  console.log(virtualDOM.querySelectorAll('link[rel="stylesheet"],style'))

  headStyles.map($e => $e.remove())
  Object.values(virtualDOM.querySelectorAll('link:not([rel="stylesheet"]),title,script,meta')).forEach($e => $e.remove())

  for(const $style of Object.values(virtualDOM.querySelectorAll('link[rel="stylesheet"],style'))) {
    headStyles.push($style)
    document.head.append($style)
    console.log($style)
    // $style.remove()
  }

  if(!virtualDOM?.innerHTML) {
    alert('Can’t find body context')
    return
  }

  console.log(virtualDOM)


  virtualDOM.querySelectorAll('mailSignatureEditable').forEach(el => {
    const attrs = {};
    const p = /^:/

    for (let attr of el.attributes) {
      attrs[attr.name.replace(p, '')] = p.test(attr.name) ? eval(attr.value) : attr.value
    }

    if(el.innerText && !attrs?.placeholder) attrs.placeholder = el.innerText

    const CompApp = createApp(MailSignatureEditable, attrs)
    CompApp.mount(el)

    el.replaceWith(el.firstChild)
  })

  $e.value.replaceWith(virtualDOM)
  $e.value = virtualDOM

}, {
  immediate: true
})

onMounted(_ => {
  setTimeout(_ => isMounted.value = true, 25)
})
</script>

<template>
  <div class="html-2-mailsignature">
    <div class="signature-upload">
      <div class="platforms">
        <a class="platforms__platform--github" href="https://github.com/magma-design-studio/vuemailsignatureconverter" target="_blank"><img :src="imgGithub" alt="GitHub" /></a>
        <a href="https://www.npmjs.com/package/vuemailsignatureconverter" target="_blank"><img src="https://img.shields.io/npm/v/vuemailsignatureconverter" alt="npm" /></a>
      </div>
      <p>Drop your Signature .html at the preview window below! <br />
      If you don’t have one – <a href="demo.html" download>take this one</a> or <a href="https://github.com/magma-design-studio/vuemailsignatureconverter" target="_blank">have a look at the documentation</a>!</p>
    </div>
    <mailClientWindow @drop.prevent="onDrop" @dragover.prevent @dragenter="onDragDrop" @dragleave="onDragDrop" class="dropzone" :class="{ 'dropzone--is-over' : isDragOver}">
        <div class="wysiwyg" ref="$e"></div>
    </mailClientWindow>
    <mailSignatureConverter :source="$e" />
  </div>
</template>

<style lang="scss">
:root {
  --app-highlight-color: rgba(69, 239, 131, 0.75);
}
</style>

<style lang="scss" scoped>


a {
  color: currentColor;
}

.signature-upload {
  margin: 1em 0;
  font-family: 'Courier New', Courier, monospace;
}

.wysiwyg {
  &:empty {
    &::before {
      content: 'Drop your .html signature right here!';
      font-family: 'Courier New', Courier, monospace;
      text-align: center;
      display: block;
      padding: 2em;
      border-radius: 1em;
      border: 1px dotted black;
      margin-top: 1em;
    }
  }
}

.platforms {
  display: flex;
  align-items: center;
  .platforms__platform--github {
    img {
      width: auto;
      height: 1em;
    }
  }
  &>* {
    &:not(:last-child) {
      margin-right: .5em;
    }
  }
}

</style>