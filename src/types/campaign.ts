export interface Campaign {
  campaignSeq?: number;
  memberSeq?: number;
  sendTypeSeq?: number;
  campaignStateCd?: string;
  campaignName?: string;
  requestDate?: Date;
  scheduledDate?: string;
  scheduledTime?: string;
  sendYn?: string;
  sendDate?: Date;
  sendNum?: number;
  targetNum?: number;
}

export interface CampaignDetail {
  campaignDetailSeq?: number;
  campaignSeq?: number;
  sendTitle?: string;
  sendContent?: string;
  sendTelno?: string;
  sender?: string;
  targetStartAge?: number;
  targetEndAge?: number;
  targetGenCd?: number;
  targetMemYn?: string;
  targetAddressYn?: string;
  sendLimit?: number;
  resortAgreYn?: string;
  pushAgreYn?: string;
  receiveExclusionDay?: number;
  targetQuery?: string;
}

export interface CampaignDetailForm extends Campaign, CampaignDetail {}

export class TargetAddress {
  targetAddressSeq?: number;
  campaignDetailSeq?: number;
  addressSeq?: number;
}
