import { Box, Grid } from '@material-ui/core'
import { ReactElement } from 'react'
import { ArrowLeft, Check, Layers, PlusSquare, X } from 'react-feather'
import { DocumentationText } from '../../components/DocumentationText'
import ExpandableListItemActions from '../../components/ExpandableListItemActions'
import { SwarmButton } from '../../components/SwarmButton'

interface Props {
  step: number
  onUpload: () => void
  onCancel: () => void
  onGoBack: () => void
  onProceed: () => void
  isUploading: boolean
  hasStamp: boolean
  uploadLabel: string
  stampMode: 'BUY' | 'SELECT'
  setStampMode: (mode: 'BUY' | 'SELECT') => void
}

export function UploadActionBar({
  step,
  onUpload,
  onCancel,
  onGoBack,
  onProceed,
  isUploading,
  hasStamp,
  uploadLabel,
  stampMode,
  setStampMode,
}: Props): ReactElement {
  if (step === 0) {
    return (
      <>
        <Box mb={1}>
          <ExpandableListItemActions>
            <SwarmButton onClick={onProceed} iconType={Layers}>
              Add Postage Stamp
            </SwarmButton>
            <SwarmButton onClick={onCancel} iconType={X} cancel>
              Cancel
            </SwarmButton>
          </ExpandableListItemActions>
        </Box>
        <DocumentationText>You need a postage stamp to upload.</DocumentationText>
      </>
    )
  }

  if (step === 1) {
    return (
      <Grid container direction="row" justifyContent="space-between">
        <ExpandableListItemActions>
          {stampMode === 'SELECT' && (
            <SwarmButton onClick={onProceed} iconType={Check} disabled={!hasStamp}>
              Proceed With Selected Stamp
            </SwarmButton>
          )}
          <SwarmButton onClick={onGoBack} iconType={ArrowLeft} cancel>
            Back To Preview
          </SwarmButton>
        </ExpandableListItemActions>
        <SwarmButton
          onClick={() => setStampMode(stampMode === 'BUY' ? 'SELECT' : 'BUY')}
          iconType={stampMode === 'BUY' ? Layers : PlusSquare}
        >
          {stampMode === 'BUY' ? 'Use Existing Stamp' : 'Buy New Stamp'}
        </SwarmButton>
      </Grid>
    )
  }

  if (step === 2) {
    return (
      <ExpandableListItemActions>
        <SwarmButton onClick={onUpload} iconType={Check} disabled={isUploading} loading={isUploading}>
          {uploadLabel}
        </SwarmButton>
        <SwarmButton onClick={onGoBack} iconType={ArrowLeft} disabled={isUploading} cancel>
          Change Postage Stamp
        </SwarmButton>
      </ExpandableListItemActions>
    )
  }

  return <></>
}
