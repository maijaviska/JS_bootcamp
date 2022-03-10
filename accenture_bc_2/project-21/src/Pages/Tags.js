import { useState } from "react";

function Tags() {
    const[tags, setTags] = useState('')
    const availableTags = ['meow', 'until', 'belly', 'rubs', 'hide', 'behind', 'curtain', 'when', 'vacuum', 'cleaner', 'is', 'on', 'scratch', 'strangers', 'and', 'poo', 'on', 'owners', 'food', 'reaches', 'under', 'door', 'into', 'adjacent', 'room', 'i', 'shredded', 'your', 'linens', 'for', 'you', 'spit', 'up', 'on', 'light', 'gray', 'carpet', 'instead', 'of', 'adjacent', 'linoleum'];
    const selectedTagsArray = tags.split(' ')

    const tagsList = availableTags.map((tag, index) => {
        const className = ['badge', 'm-1']
        if (selectedTagsArray.indexOf(tag) >=0){
            className.push('bg-success')
        } else {
            className.push('bg-primary')
        }

        return (
            <span className={className.join(' ')} key={index}>{tag}</span>
        )
    })
    
    return (
        <div className="row mt-5 mb-5">
            <div className="col mt-5 mb-5">
                <h2>Looking for tags: {selectedTagsArray.join(', ')}</h2>
                <input value={tags} onChange={(e) => setTags(e.target.value)} className="form-control" />
                <div>
                    {tagsList}
                </div>

            </div>
        </div>
    )
}
export default Tags;