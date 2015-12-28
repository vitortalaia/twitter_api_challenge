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

    context "when the specified username doesn't exist" do
      before do
        allow(TimelineService).to receive(:perform)
          .and_raise(Twitter::Error::NotFound)
      end

      it 'returns a 404 NOT FOUND status code' do
        expect(subject).to be_not_found
      end
    end

    context "when the specified username has a private profile" do
      before do
        allow(TimelineService).to receive(:perform)
          .and_raise(Twitter::Error::Unauthorized)
      end

      it 'returns a 422 UNPROCESSABLE ENTITY status code' do
        expect(subject.status).to eq 422
      end
    end
  end
end
