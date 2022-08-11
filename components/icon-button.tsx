type IconButtonProps = {
  color?: string
  icon: any
  onClick?: any
}

export const IconButton = ({ color, icon, onClick }: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="p-3 bg-black dark:bg-white text-white dark:text-black rounded-lg"
    >
      {' '}
      {icon}
    </button>
  )
}
