require 'rails_helper'
include JSONHelper

describe TimelineService do
  subject { described_class.perform('someuser') }

  context 'when requested with a valid profile' do
    let(:tweet) { build :tweet }
    let(:timeline) { get_json :timeline }

    before do
      allow(TwitterClient).to receive(:user_timeline).and_return([tweet])
    end

    it 'returns the correct timeline representation' do
      expect(subject.to_json).to eq timeline.gsub(/\n/, '')
    end
  end
end
