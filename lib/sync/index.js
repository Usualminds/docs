let spawn = require('child_process').spawn;
let path = require('path')
let fs = require('fs-extra')
let dist = path.resolve(__dirname,'/Users/apple/Documents/github/docs/docs/.vuepress/dist/*')
let dest = path.resolve(__dirname,'/Users/apple/Documents/work/sites')


let cp = spawn('cp', ['-r',dist, dest], {
  stdio: 'inherit',
  shell: true
});

// callback
cp.on('close', (code) => {
  if (code !== 0) {
    console.log(`copy fail with code: ${code}`);
  }
  console.log(`✨✨ ✨ ✨ ✨ ✨✨ copy finished  ✨ ✨ ✨ ✨ ✨ ✨ `);
});

// if(fs.existsSync(dest)){
//   let clean = spawn('rm', ['-r -f', `${dest}/*}`], {
//     stdio: 'inherit',
//     shell: true
//   });

//   clean.on('close', code => {
//     if(code === 0){
//       console.log(`✨✨ ✨ ✨ ✨ ✨✨ clean finished  ✨ ✨ ✨ ✨ ✨ ✨ `);
//       // options should config shell env, http://nodejs.cn/api-v12/child_process/child_process_spawn_command_args_options.html
//       let cp = spawn('cp', ['-r',dist, dest], {
//         stdio: 'inherit',
//         shell: true
//       });

//       // callback
//       cp.on('close', (code) => {
//       if (code !== 0) {
//         console.log(`copy fail with code: ${code}`);
//       }
//       console.log(`✨✨ ✨ ✨ ✨ ✨✨ copy finished  ✨ ✨ ✨ ✨ ✨ ✨ `);
//       });

//     }
//   })
// }
