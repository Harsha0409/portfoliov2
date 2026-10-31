export default function SectionHead({ first, second }) {
  return (
    <h2 className="section-head" data-parallax>
      <span data-reveal>{first}</span>{' '}
      <span className="ghost">{second}</span>
    </h2>
  )
}
