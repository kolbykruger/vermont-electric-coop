// Links return false
$('a:not(.force), button:not(.force), input[type="submit"]:not(.force)').click(function() {
    return false
})
