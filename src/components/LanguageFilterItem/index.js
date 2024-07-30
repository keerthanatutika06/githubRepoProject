// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageDetails, isActive, setActiveFilterId} = props
  const {id, language} = languageDetails
  const btnClassName = isActive ? 'language-item active' : 'language-item'

  const onClickLanguage = () => {
    setActiveFilterId(id)
  }

  return (
    <li>
      <button type="button" className={btnClassName} onClick={onClickLanguage}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
