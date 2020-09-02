decipherThis = (str) => {
    var arr = str.split(" ")
    var emp = ''

    for (var i = 0; i < arr.length; i++) {
        var sep = arr[i].match(/[a-z]+|[^a-z]+/gi);
        var letter = String.fromCharCode(sep[0]);
        if (sep.length > 1) {


            var otra = sep[1].replace(/^(\w)(.*)(\w)$/, "$3$2$1")
            var word = letter + otra
            emp = emp + word + ' '
        } else
            emp += letter + ' '

    } return emp.slice(0, -1);
}