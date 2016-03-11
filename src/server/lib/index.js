export function invalid(res, message= "there was an error", status = 400,log) {
  if(log) console.log(message)
  return res.send(message).status(status)
}
