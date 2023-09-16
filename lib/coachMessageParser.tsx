export const coachMessageParser = (msg: string) => {
  try {
    const regex =
      /Score: (?<score>[1-5])\s+Feedback: (?<feedback>.*)\s+Try This Instead: (?<tti>.*)/gim
    const { score, feedback, tti } = regex.exec(msg)?.groups ?? {}
    return { score: parseInt(score), feedback, tti }
  } catch (e) {
    return { score: null, feedback: msg }
  }
}
