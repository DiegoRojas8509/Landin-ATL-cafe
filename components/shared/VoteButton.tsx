'use client'

interface VoteButtonProps {
  label:    string
  pct:      number
  voted:    boolean
  selected: boolean
  onClick:  () => void
}

export default function VoteButton({ label, pct, voted, selected, onClick }: VoteButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={voted}
      style={{
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        padding:        '16px 20px',
        border:         `1px solid ${selected ? 'var(--atl-amber)' : 'rgba(255,255,255,0.12)'}`,
        background:     'transparent',
        color:          'rgba(255,255,255,0.85)',
        fontFamily:     'var(--font-body)',
        fontSize:       '15px',
        fontWeight:     400,
        cursor:         voted ? 'default' : 'none',
        textAlign:      'left',
        position:       'relative',
        overflow:       'hidden',
        width:          '100%',
        transition:     'border-color 0.25s ease',
      }}
    >
      {/* Progress fill */}
      <span
        style={{
          position:   'absolute',
          left:       0,
          top:        0,
          bottom:     0,
          width:      voted ? `${pct}%` : '0%',
          background: 'var(--atl-copper)',
          transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)',
          zIndex:     0,
          opacity:    0.6,
        }}
      />

      {/* Label */}
      <span style={{ position: 'relative', zIndex: 1 }}>{label}</span>

      {/* Percentage */}
      <span
        style={{
          position:  'relative',
          zIndex:    1,
          fontSize:  '13px',
          color:     'var(--atl-amber)',
          opacity:   voted ? 1 : 0,
          transition:'opacity 0.3s ease 0.2s',
          fontWeight:500,
        }}
      >
        {pct}%
      </span>
    </button>
  )
}
