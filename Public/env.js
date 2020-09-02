const express = require('express')
const fs = require('fs')
const path = require('path')


MAIN_DIR = path.dirname(__filename) + "/"
console.log(MAIN_DIR)

const router = express.Router()

router.get('/', (req, res) => {
    fs.readFile(MAIN_DIR + 'index.html', (err, data) => {
        if (err) {
            res.writeHead(404)
            fs.readFile(__dirname + '/404.html', (err2, data2) => {
                if (err2) {
                    console.log(err2)
                    res.write("[404, 500] Fatal Error")
                    res.end()
                } else {
                    console.log(`[+] 200 ---> ${__dirname + "/404.html"}`)
                    res.write(data2)
                    res.end()
                }
            })
        } else {
            console.log(`[+] 200 ---> ${MAIN_DIR + 'index.html'}`)
            res.writeHead(200)
            res.write(data)
            res.end()
        }
    })
})

router.get('/start', (req, res) => {
    var remaining = ""

    function begin() {
        const startTime = 1;
        let time = startTime * 60;
        let timerEl = "";

        function refreshCounter() {
            const mins = Math.floor(time / 60);
            let secs = time % 60;
            if (remaining == "0 : 0") {
                clearInterval()
                remaining = timerEl
                try {
                    return res.send("-33.90362, 151.24482")
                } catch (error) {
                    // ignore
                }

            } else {
                timerEl = `${mins} : ${secs}`;
                console.log(timerEl)
                remaining = timerEl;
                time--;
            }
        }
        setInterval(refreshCounter, 1000);
    }
    begin()


})

router.get("/:filename", (req, res) => {
    var filename = req.params.filename
    console.log(filename)
    fs.readFile(MAIN_DIR + filename, (err, data) => {
        if (err) {
            res.writeHead(404)
            fs.readFile(__dirname + '/404.html', (err2, data2) => {
                if (err2) {
                    console.log(err2)
                    res.write("[404, 500] Fatal Error")
                    res.end()
                } else {
                    console.log(`[+] 200 ---> ${__dirname + "/404.html"}`)
                    res.write(data2)
                    res.end()
                }
            })
        } else {
            console.log(`[+] 200 ---> ${MAIN_DIR + filename}`)
            res.writeHead(200)
            res.write(data)
            res.end()
        }
    })
})


module.exports = router