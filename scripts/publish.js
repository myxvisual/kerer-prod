const fse = require("fs-extra")
const path = require("path")
const child_process = require("child_process")
process.chdir(__dirname)

try {
    child_process.execSync(`git clone git@github.com:myxvisual/kerer-prod.git ../../kerer-prod`)
} catch(e) {}
fse.copySync(path.join(__dirname, "../_book"), path.join(__dirname, "../../kerer-prod"), { overwrite: true })

child_process.execSync(`cd ${path.join(__dirname, "../../kerer-prod")} && git add -A && git commit -m "feat: Update kerer.com" && git push`)
