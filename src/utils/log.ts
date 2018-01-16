export default function log(msg, level: 'log' | 'error' | 'warn' | 'info' = 'log') {
  return console[level](msg)
}
