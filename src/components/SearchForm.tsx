import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import FieldInfo from './FieldInfo'
import type { FC } from 'react'

const schema = z.object({
  search: z.string().min(1, 'Search term is required'),
})
const SearchForm: FC = () => {
  // Form instance
  const searchForm = useForm({
    validators: {
      onBlur: schema,
    },
    defaultValues: {
      search: '',
    },
    onSubmit: ({ value }) => {
      console.log(value)
      alert(`Searching for: ${value.search}`)
    },
  })

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()
    await searchForm.handleSubmit()
  }

  return (
    <>
      <main className='mb-5'>
        <form onSubmit={onSubmit}>
          {/* Search Field */}
          <searchForm.Field
            name="search"
            children={(field) => (
              <>
                <div className='flex flex-col items-center'>
                  <input
                    type="text"
                    id={field.name}
                    name={field.name}
                    placeholder='Search Game'
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="w-full max-w-md mx-auto mt-5 p-4 bg-gray-800 rounded-lg shadow-md"
                  />
                  <FieldInfo field={field} />
                </div>
              </>
            )}
          />

          <div className="w-full flex justify-center mt-4">
            <searchForm.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => (
                    <>
                    <button type='submit' disabled={!canSubmit || isSubmitting} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50">
                        {isSubmitting ? 'Searching...' : 'Search'}
                    </button>
                    <button type='reset' onClick={() => searchForm.reset()} className="ml-4 px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                        Reset
                    </button>
                    </>
                )}
            />
          </div>
        </form>
      </main>
    </>
  )
}
export default SearchForm
