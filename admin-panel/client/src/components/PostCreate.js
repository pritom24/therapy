import React from 'react'
import {Create, SimpleForm, TextInput , DateInput} from 'react-admin'

function PostCreate(props) {
  return (
    <Create title="create a post" {...props}>
        <SimpleForm>
            <TextInput source='title'/>
            <TextInput multiline source='body'/>
            <DateInput label="Published" source='publishedAt'/>
        </SimpleForm>
    </Create>
  )
}

export default PostCreate