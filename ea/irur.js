function Encode$1(params) {
  return btoa(Buffer.from(params).toString('binary'));
}
