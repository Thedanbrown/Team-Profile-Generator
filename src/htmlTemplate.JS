//Generates the html page and appends the cards for each team member generated from the user
function generateHtml(teamArray) {
    let teamMemberHtml = '';
    teamArray.forEach((teamMember) => {
        teamMemberHtml += teamMember.generateHtml();
    })
    return `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Our Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    </head>
    <body>
    <header>
        <nav class="navbar" id="navbar">
            <span class="navbar-brand mb-0 p-3 h1 w-100 text-center bg-secondary text-white" id="navbar-text">Meet Our Team</span>
        </nav>
    </header>

    <main>
        <div class="container">
            <div class="row justify-content-center" id="team">
                ${teamMemberHtml}
            </div>
        </div>
    </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </body>
</html>
`
}
module.exports = generateHtml;