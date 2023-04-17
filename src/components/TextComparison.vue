<script setup>
    import { watch } from 'vue';
    import {useArgumentStore} from '@/stores/argument'

    const argumentStore = useArgumentStore()
    const removedWords = ref()
    const addedWords = ref()
    function compareArgumentStates(){
        let originalArgumentWords = []
        let finalArgumentWords = []
        
        function pushWords(array){
            let word = /\S+/
            while(word.test(manipulatedString)){
                array.push(word.exec(manipulatedString).toString())
                manipulatedString = manipulatedString.replace(word,'')
            }
        }

        let manipulatedString = argumentStore.argumentBody
        pushWords(originalArgumentWords)
        manipulatedString = argumentStore.finalArgumentBody
        pushWords(finalArgumentWords)

        let addedWordsArray = finalArgumentWords.filter(value => !originalArgumentWords.includes(value))
        let removedWordsArray = originalArgumentWords.filter(value => !finalArgumentWords.includes(value))

        let addedWordsObjectArray = []
        let removedWordsObjectArray = []

        function sortWords(differenceArray,comparedArray,differenceObjectArray){
            for(let index = 0; index<differenceArray.length; index++){
                let word = differenceArray[index]
                let indexInCompared = comparedArray.indexOf(word)
                let wordObject = {
                    index:indexInCompared,
                    word:word
                }
                differenceObjectArray.push(wordObject)
            }
            differenceObjectArray.sort((a,b) => parseInt(a.index) - parseInt(b.index))
        }

        sortWords(addedWordsArray,finalArgumentWords,addedWordsObjectArray)
        sortWords(removedWordsArray,originalArgumentWords,removedWordsObjectArray)

        function stringifyWords(differenceObjectArray,differenceArray){
            let differenceString = ''
            for(let index=0; index<differenceObjectArray.length; index++){
                let wordObject = differenceObjectArray[index]
                differenceArray[index] = wordObject.word
            }
            for(let index=0; index<differenceArray.length; index++){
                let word = differenceArray[index]
                if(index == 0){
                    differenceString = differenceString.concat(word)
                } else{
                    differenceString = differenceString.concat(' '+word)
                }
            }
            return differenceString
        }

        addedWords.value = stringifyWords(addedWordsObjectArray,addedWordsArray)
        removedWords.value = stringifyWords(removedWordsObjectArray,removedWordsArray)

    }

    watch(()=>argumentStore.finalArgumentBody, ()=>{
        compareArgumentStates()
    })
</script>

<template>
    <v-card>
        <v-card-text>
            <div id="added">
                +Added: {{ addedWords }}
            </div>
            <div id="removed">
                -Removed: {{ removedWords }}
            </div>
        </v-card-text>
    </v-card>
</template>

<style scoped>
    #added{
        background-color: lightgreen;
        color: darkgreen;
    }
    #removed{
        background-color: lightpink;
        color: darkred;
    }

    .v-card{
        margin: 10px;
        width: 500px
    }
</style>