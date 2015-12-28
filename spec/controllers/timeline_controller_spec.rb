require 'rails_helper'

describe TimelineController do

  it { is_expected.to rescue_from(Twitter::Error::NotFound).with(:handle_not_found) }
  it { is_expected.to rescue_from(Twitter::Error::Unauthorized).with(:handle_unauthorized) }

  describe '.fetch' do
    let(:tweet) { build(:tweet) }
    let(:representation) { TimelineRepresenter.for_collection.new([tweet]) }
    subject { get :fetch, username: 'someuser' }

    before do
      allow(TimelineService).to receive(:perform).and_return(representation)
    end

    it 'returns a 200 OK status code' do
      expect(subject).to be_success
    end

    it 'returns a JSON representation' do
      expect(subject.content_type).to eq Mime::JSON
    end
  end
end
