import chalk from 'chalk'
import padLeft from 'pad-left'

export default (port, prefix, router) => {
  console.log(`\n`)
  router.stack.forEach(route => {
    console.log(chalk.green(`${padLeft('[' + route.methods, 15)}]    `) + chalk.bold(`http://localhost:${port}${prefix}${route.path}`))
  })
}
