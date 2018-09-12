import React, { Component } from 'react'
import { func, shape, string } from 'prop-types'
import { Button } from '@ns-private/elements'
import { alertRed, white } from '@ns-private/colors'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {
  Header,
  Icon,
  ContentContainer,
  AnchorButton,
  ButtonLink,
} from 'components/universal'
import {
  BulkEmailImport,
  Collaborator,
  Number,
  ActiveNumber,
  Steps,
  StepDescription,
} from 'components/universal/org'
import { handleUsersAddition, handleUserRemoval, fetchMembers } from 'lib/user-management'
import supportWidget from 'lib/support-widget'
import { getUser } from 'dux/user'
import { getSelectedOrg, getSelectedOrgId } from 'dux/orgs'

const CollaboratorsPositioner = styled.div`
  margin-bottom: 40px;
`

const ButtonPositioner = styled.div`
  margin-bottom: 30px;
`

const FullTeam = styled.div`
  background-color: ${alertRed};
  color: ${white};
  padding-top: 11px;
  padding-right: 15px;
  padding-bottom: 11px;
  padding-left: 15px;
  border-radius: 2px;

  display: gflex;
  align-items: center;

  > svg {
    height: 12px;
  }

  margin-bottom: 30px; /* TODO: consider moving this style up a level to a "positioner" element? */
`

const PopoverPositioner = styled.div`
  position: absolute;
  display: inline-block;
  margin-top: 10px;
`

const ChevronIcon = styled(Icon)`
  color: ${white};
`

const ErrorButtonLink = styled(ButtonLink)`
  color: ${white};
  text-decoration: underline;

  :hover {
    color: ${white};
    text-decoration: underline;
  }
`

class InviteUsersView extends Component {
  static propTypes = {
    history: shape({
      push: func.isRequired,
    }).isRequired,
    showView: func.isRequired,
    user: shape({
      userId: string.isRequired,
      email: string.isRequired,
    }).isRequired,
  }

  state = {
    showBulkInvitePopover: false,
    members: [
      {
        // picture: '',
        email: this.props.user.email,
        rank: 'owner',
        userId: this.props.user.userId,
      },
    ],
  }

  handleInviteButtonClick = () => {
    this.setState({ showBulkInvitePopover: true })
  }

  handleBulkInvitePopoverClose = () => {
    this.setState({ showBulkInvitePopover: false })
  }

  handleUserAddition = async emails => {
    const { members } = this.state
    const { selectedOrgId } = this.props

    await handleUsersAddition(members, emails, selectedOrgId)

    const updatedMembers = await fetchMembers(selectedOrgId)
    this.setState({
      members: updatedMembers,
      showBulkInvitePopover: false,
    })
  }

  handleUsersRemoval = async (orgId, type, id) => {
    await handleUserRemoval(orgId, type, id)

    const members = await fetchMembers(this.props.selectedOrgId)
    this.setState({ members })
  }

  render() {
    const { members, showBulkInvitePopover } = this.state
    const { selectedOrg, selectedOrgId, user } = this.props

    const maximumMembershipReached = members.length >= selectedOrg.seatLimit

    return (
      <ContentContainer>
        <Header>Add People</Header>
        <Steps>
          <Number>✓</Number>
          Create Organization
          <ActiveNumber last>2</ActiveNumber>
          Add People
        </Steps>
        <StepDescription>Invite collaborators to your new team.</StepDescription>
        {maximumMembershipReached && (
          <FullTeam>
            <span>
              That’s a full team!{' '}
              <ErrorButtonLink
                onClick={() => {
                  supportWidget()
                }}
              >
                Contact support
              </ErrorButtonLink>{' '}
              to customize your subscription if you need to add more
            </span>
            <ChevronIcon id="chevron-right" />
          </FullTeam>
        )}
        <CollaboratorsPositioner>
          {members.map(({ inviteId, type, userId, ...personRest }) => (
            <Collaborator
              key={userId || inviteId}
              disabled={userId === user.userId}
              {...personRest}
              onDelete={() => this.handleUsersRemoval(selectedOrgId, type, inviteId)}
            />
          ))}
        </CollaboratorsPositioner>
        {!maximumMembershipReached && (
          <ButtonPositioner>
            <Button onClick={this.handleInviteButtonClick} color="actionBlue">
              Add Team Member
            </Button>
            {showBulkInvitePopover && (
              <PopoverPositioner>
                <BulkEmailImport
                  onClose={this.handleBulkInvitePopoverClose}
                  onSubmit={this.handleUserAddition}
                />
              </PopoverPositioner>
            )}
          </ButtonPositioner>
        )}
        <ButtonPositioner>
          <AnchorButton to="/downloads">Continue</AnchorButton>
        </ButtonPositioner>
      </ContentContainer>
    )
  }
}

const mapStateToProps = state => ({
  user: getUser(state),
  selectedOrg: getSelectedOrg(state),
  selectedOrgId: getSelectedOrgId(state),
})

export default connect(mapStateToProps)(InviteUsersView)
