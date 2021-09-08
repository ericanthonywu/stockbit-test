/**
 * @param {string[]} list
 */
function run(list){
    const anagrams = {};
    const sortWord = (word) => word.split("").sort().join()

    for (const i in list) {
        const word = list[i];
        const sorted = sortWord(word);
        if (anagrams[sorted] != null) {
            anagrams[sorted].push(word);
        }
        else {
            anagrams[sorted] = [word];
        }
    }
    const result = []
    for (let sorted in anagrams) {
        let words = anagrams[sorted];
        let sep = ",";
        let out = "";
        const tempRes = []
        for (const n in words) {
            out += sep + words[n];
            sep = "";
            out = out.substring(1)
            tempRes.push(out)
        }
        result.push(tempRes)
    }
}

console.log(run(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']));
